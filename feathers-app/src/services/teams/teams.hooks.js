const { authenticate } = require('feathers-authentication').hooks;
const { restrictToRoles } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [ restrictToRoles({ roles: ['admin']}) ],
    create: [ restrictToRoles({ roles: ['admin']}) ],
    update: [ restrictToRoles({ roles: ['admin']}) ],
    patch: [ restrictToRoles({ roles: ['admin']}) ],
    remove: [ restrictToRoles({ roles: ['admin']}) ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
