// ? Use this class to create standardized Error codes
const ErrorCodes = Object.freeze({
  INVALID_INPUT_ERROR: 'InvalidInputError',
  INVALID_PAYLOAD_ERROR: 'InvalidPayloadError',
  SERVER_ERROR: 'ServerError',
  RESOURCE_NOT_FOUND_ERROR: 'ResourceNotFound',
  INVALID_ENDPOINT_ERROR: 'InvalidEndpointError',
  NOT_AUTHENTICATED_ERROR: 'NotAuthenticatedError',
  AUTHENTICATION_ERROR: 'AuthenticationError',
  INVALID_CREDENTIALS_ERROR: 'InvalidCredentialsError',
  INVALID_PERMISSIONS_ERROR: 'InvalidPermissionsError',
  ACCOUNT_DEACTIVATED_ERROR: 'AccountDeactivatedError'
})

module.exports = ErrorCodes