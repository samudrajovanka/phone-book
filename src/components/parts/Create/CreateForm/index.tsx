'use client';

import { useCallback } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';

import Input from '@/components/elements/Input';
import Button from '@/components/elements/Button';
import { NAME_REGEX, PHONE_NUMBER_REGEX } from '@/constans/regex';
import { useContacts } from '@/contexts/contacts';
import {
  CREATE_CONTACT_QUERY,
  GET_CONTACT_LIST_QUERY,
  GET_CONTACT_LIST_DEFAULT_VARIABLES
} from '@/queries/contacts';
import type { GetContactsResponse } from '@/queries/contacts/types';

import {
  CreateFormContainer,
  FormContainer,
  PhoneNumberContainer,
  PhoneNumbersContainer
} from './styles';
import { ContactForm } from './types';

const CreateForm = () => {
  const [mutateFunction, { loading: loadingCreateContact }] = useMutation(CREATE_CONTACT_QUERY);
  const contactsCtx = useContacts();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<ContactForm>({
    defaultValues: {
      phones: [
        {
          number: ''
        }
      ]
    }
  });

  const { loading: loadingGetContact, refetch: refetchContacts } = useQuery<GetContactsResponse>(GET_CONTACT_LIST_QUERY, {
    skip: true
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phones',
  });

  const addPhoneNumber = useCallback(() => {
    append({
      number: ''
    });
  }, [append]);

  const removePhoneNumber = useCallback((index: number) => {
    remove(index);
  }, [remove]);

  const successSubmit = useCallback(async (data: ContactForm) => {
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

    mutateFunction({
      variables: {
        first_name: data.firstName,
        last_name: data.lastName,
        phones: data.phones
      },
      onCompleted: async () => {
        toast.success('Contact created successfully');

        await contactsCtx.regularContacts.refetch(contactsCtx.favoriteIds, {
          offset: 0
        });
        router.push('/');
      },
      onError: (error) => {
        console.error(error);

        if (error.graphQLErrors[0].extensions.code === 'constraint-violation') {
          toast.error('Phone number already exists');
          return;
        }

        toast.error('Something went wrong');
      }
    });
  }, [refetchContacts, mutateFunction, router, contactsCtx.regularContacts, contactsCtx.favoriteIds]);
  

  return (
    <CreateFormContainer>
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
          
          <div>
            <label>Phone Numbers</label>

            <PhoneNumbersContainer>
              {fields.map((field, index) => (
                <PhoneNumberContainer key={field.id}>
                  <Input
                    placeholder="Enter phone number"
                    isBlock
                    errorMessage={errors.phones?.[index]?.number?.message}
                    {...register(`phones.${index}.number`, {
                      required: {
                        value: true,
                        message: 'Phone number is required',
                      },
                      pattern: {
                        value: PHONE_NUMBER_REGEX,
                        message: 'Phone number is invalid format',
                      },
                      minLength: {
                        value: 4,
                        message: 'Phone number is invalid format',
                      },
                    })}
                  />

                  <Button
                    variant="outline"
                    color="error"
                    onClick={() => removePhoneNumber(index)}
                    disabled={fields.length === 1}
                  >
                    -
                  </Button>
                </PhoneNumberContainer>
              ))}
            </PhoneNumbersContainer>

            <Button
              variant="outline"
              onClick={addPhoneNumber}
            >
              + Phone number
            </Button>
          </div>
        </FormContainer>

        <Button
          type="submit"
          isLoading={loadingGetContact || loadingCreateContact}
        >
          Create
        </Button>
      </form>
    </CreateFormContainer>
  )
}

export default CreateForm;
