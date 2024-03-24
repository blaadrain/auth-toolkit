import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel=""
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <p className="text-center text-neutral-900">Oops! Something went wrong</p>
    </CardWrapper>
  );
};
