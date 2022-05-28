export const validationSchemeRegister = {
  schema: {
    body: {
      type: 'object',
      required: ['email', 'password', 'username'],
      properties: {
        email: {
          type: 'string',
          minLength: 4,
          maxLength: 30,
        },
        username: {
          type: 'string',
          minLength: 4,
          maxLength: 15,
        },
        password: {
          type: 'string',
          minLength: 4,
          maxLength: 20,
        },
      },
    },
  },
};

export const validationSchemeLogin = {
  schema: {
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        email: {
          type: 'string',
          minLength: 4,
          maxLength: 30,
        },

        password: {
          type: 'string',
          minLength: 4,
          maxLength: 20,
        },
      },
    },
  },
};
