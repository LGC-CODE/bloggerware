const { authenticate } = require('@feathersjs/authentication').hooks;

const handleCloudUpload = require('../../hooks/handle-cloud-upload');

const handleFileUpload = require('../../hooks/handle-file-upload');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [handleFileUpload()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [handleCloudUpload()],
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
