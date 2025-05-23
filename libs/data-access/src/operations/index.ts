import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../@types/index';
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
  input: Types.LoginInput;
}>;

export type User = {
  firstName: string;
  lastName: string;
  username: string;
};

export type LoginMutation = {
  __typename?: 'Mutation';
  Login?: {
    __typename?: 'LoginResponse';
    status: boolean;
    message: string;
    TokenResponse?: {
      __typename?: 'TokenResponse';
      token?: string | null;
      token_type?: string | null;
    } | null;
  } | null;
};

export type TokenResponseInfoFragment = {
  __typename?: 'TokenResponse';
  token?: string | null;
  token_type?: string | null;
};

export const TokenResponseInfoFragmentDoc = gql`
  fragment TokenResponseInfo on TokenResponse {
    token
    token_type
  }
`;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    Login(input: $input) {
      status
      message
      TokenResponse {
        ...TokenResponseInfo
      }
    }
  }
  ${TokenResponseInfoFragmentDoc}
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
