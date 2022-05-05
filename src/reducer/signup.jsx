export const signUpReducer = (signUpState, signUpAction) => {
  switch (signUpAction.type) {
    case "FIRSTNAME":
      return { ...signUpState, firstName: signUpAction.payload.target.value };
    case "LASTNAME":
      return { ...signUpState, lastName: signUpAction.payload.target.value };
    case "EMAIL":
      return { ...signUpState, email: signUpAction.payload.target.value };
    case "PASSWORD":
      return { ...signUpState, password: signUpAction.payload.target.value };
    case "CONFIRM_PASSWORD":
      return {
        ...signUpState,
        confirmPassword: signUpAction.payload.target.value,
      };
    default:
      return signUpState;
  }
};
