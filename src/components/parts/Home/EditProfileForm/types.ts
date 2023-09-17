export type EditProfileContactForm = {
  firstName: string;
  lastName: string;
};

export type EditProfileFormProps = EditProfileContactForm & {
  id: string;
  onSuccess?: (data: EditProfileContactForm) => void;
};
