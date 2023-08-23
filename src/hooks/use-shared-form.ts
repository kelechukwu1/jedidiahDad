import { useCallback, useMemo, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import {
  IFormResponse,
  IFormHelperTypes,
} from "@/components/shared/form/index.form";

type IUseSharedForm<F extends FieldValues> = Pick<
  UseFormReturn<F>,
  "register" | "formState"
> & {
  submitForm: any;
  formResponse?: IFormResponse;
  shouldPraise: boolean;
};

export default function useSharedForm<F extends FieldValues>(
  onSubmit: SubmitHandler<F>,
  successMessage: string
): IUseSharedForm<F> {
  const { register, handleSubmit, formState, reset } = useForm<F>({
    mode: "onChange",
  });
  const [formResponse, setFormResponse] = useState<IFormResponse | undefined>();
  const shouldPraise = useMemo(
    () => formState.isValid && !formResponse,
    [formState.isValid, formResponse]
  );

  const submitForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        await handleSubmit(onSubmit)(e);
        setFormResponse({
          message: successMessage,
          type: IFormHelperTypes.Success,
        });
        reset();
      } catch (error) {
        setFormResponse({
          message: error as string,
          type: IFormHelperTypes.Error,
        });
        reset(undefined, {
          keepDirtyValues: true,
          keepIsValid: true,
          keepErrors: true,
          keepIsSubmitted: true,
        });
        console.error(error);
      } finally {
        setTimeout(() => setFormResponse(undefined), 5000);
      }
    },
    [handleSubmit, onSubmit, reset, successMessage]
  );

  return {
    register,
    formState,
    submitForm,
    formResponse,
    shouldPraise,
  };
}