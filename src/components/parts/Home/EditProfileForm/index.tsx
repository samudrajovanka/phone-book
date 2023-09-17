'use client';

import { useCallback } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import Text from '@/components/elements/Text';
import { NAME_REGEX } from '@/constans/regex';
import { useContacts } from '@/contexts/contacts';
import {
  GET_CONTACT_LIST_QUERY,
  GET_CONTACT_LIST_DEFAULT_VARIABLES,
  EDIT_CONTACT_BY_ID_QUERY
} from '@/queries/contacts';
import type { GetContactsResponse } from '@/queries/contacts/types';

import {
  FormContainer
} from './styles';
import { EditProfileContactForm, EditProfileFormProps } from './types';

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  id,
  firstName,
  lastName,
  onSuccess
}) => {
  const [mutateFunction, { loading: loadingEditContact }] = useMutation(EDIT_CONTACT_BY_ID_QUERY);
  const contactsCtx = useContacts();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<EditProfileContactForm>({
    defaultValues: {
      firstName,
      lastName
    }
  });

  const { loading: loadingGetContact, refetch: refetchContacts } = useQuery<GetContactsResponse>(GET_CONTACT_LIST_QUERY, {
    skip: true
  });

  const successSubmit = useCallback(async (data: EditProfileContactForm) => {
    if (data.firstName !== firstName || data.lastName !== lastName) {
      const { data: contactsData } = await refetchContacts({
        ...GET_CONTACT_LIST_DEFAULT_VARIABLES,
        where: {
          first_name: {
            _ilike: data.firstName
          },
          last_name: {
            _ilike: data.lastName
          }
        }
      });

      if (contactsData.contact.length > 0) {
        toast.error('Contact name already exists');
        return;
      }
    }

    mutateFunction({
      variables: {
        id,
        _set: {
          first_name: data.firstName,
          last_name: data.lastName
        }
      },
      onCompleted: async () => {
        toast.success('Contact profile successfully updated');

        {onSuccess && onSuccess({
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim()
        })}
      },
      onError: (error) => {
        console.error(error);

        toast.error('Something went wrong');
      }
    });
  }, [firstName, lastName, mutateFunction, id, refetchContacts, onSuccess]);
  

  return (
    <div>
      <Text as="h4" fontWeight="medium">Profile</Text>

      <form onSubmit={handleSubmit(successSubmit)}>
        <FormContainer>
          <Input
            id="first-name"
            label="First Name"
            placeholder="Enter first name"
            errorMessage={errors.firstName?.message}
            {...register('firstName', {
              required: {
                value: true,
                message: 'First name is required',
              },
              pattern: {
                value: NAME_REGEX,
                message: 'First name can only contain letters',
              }
            })}
          />
          <Input
            id="last-name"
            label="Last Name"
            placeholder="Enter last name"
            errorMessage={errors.lastName?.message}
            {...register('lastName', {
              required: {
                value: true,
                message: 'Last name is required',
              },
              pattern: {
                value: NAME_REGEX,
                message: 'Last name can only contain letters',
              }
            })}
          />
        </FormContainer>

        <Button
          type="submit"
          isLoading={loadingGetContact || loadingEditContact}
        >
          Update Profile
        </Button>
      </form>
    </div>
  )
}

export default EditProfileForm;
