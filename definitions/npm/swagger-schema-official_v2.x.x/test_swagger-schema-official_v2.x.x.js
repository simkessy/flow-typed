// @flow

/* eslint-disable no-unused-vars */
/* eslint-env node */

import * as SwaggerSchema from 'swagger-schema-official';

const apiExample: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'title': 'Simple API overview',
    'version': 'v2'
  },
  'consumes': ['application/json'],
  'paths': {
    '/': {
      'get': {
        'operationId': 'listVersionsv2',
        'summary': 'List API versions',
        'produces': ['application/json'],
        'responses': {
          '200': {
            'description': '200 300 response',
            'examples': {
              'application/json': {
                "versions": [{
                  "status": "CURRENT",
                  "updated": "2011-01-21T11:33:21Z",
                  "id": "v2.0",
                  "links": [{
                    "href": "http://127.0.0.1:8774/v2/",
                    "rel": "self"
                  }]
                }, {
                  "status": "EXPERIMENTAL",
                  "updated": "2013-07-23T11:33:21Z",
                  "id": "v3.0",
                  "links": [{
                    "href": "http://127.0.0.1:8774/v3/",
                    "rel": "self"
                  }]
                }]
              }
            }
          },
          '300': {
            'description': '200 300 response',
            'examples': {
              'application/json': {
                "versions": [{
                  "status": "CURRENT",
                  "updated": "2011-01-21T11:33:21Z",
                  "id": "v2.0",
                  "links": [{
                    "href": "http://127.0.0.1:8774/v2/",
                    "rel": "self"
                  }]
                }, {
                  "status": "EXPERIMENTAL",
                  "updated": "2013-07-23T11:33:21Z",
                  "id": "v3.0",
                  "links": [{
                    "href": "http://127.0.0.1:8774/v3/",
                    "rel": "self"
                  }]
                }]
              }
            }
          }
        }
      }
    },
    '/v2': {
      'get': {
        'operationId': 'getVersionDetailsv2',
        'summary': 'Show API version details',
        'produces': [
          'application/json'
        ],
        'responses': {
          '200': {
            'description': '200 203 response',
            'examples': {
              'application/json': {
                "version": {
                  "status": "CURRENT",
                  "updated": "2011-01-21T11:33:21Z",
                  "media-types": [{
                    "base": "application/xml",
                    "type": "application/vnd.openstack.compute+xml;version=2"
                  }, {
                    "base": "application/json",
                    "type": "application/vnd.openstack.compute+json;version=2"
                  }],
                  "id": "v2.0",
                  "links": [{
                    "href": "http://127.0.0.1:8774/v2/",
                    "rel": "self"
                  }, {
                    "href": "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
                    "type": "application/pdf",
                    "rel": "describedby"
                  }, {
                    "href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
                    "type": "application/vnd.sun.wadl+xml",
                    "rel": "describedby"
                  }, {
                    "href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
                    "type": "application/vnd.sun.wadl+xml",
                    "rel": "describedby"
                  }]
                }
              }
            }
          },
          '203': {
            'description': '200 203 response',
            'examples': {
              'application/json': {
                "version": {
                  "status": "CURRENT",
                  "updated": "2011-01-21T11:33:21Z",
                  "media-types": [{
                    "base": "application/xml",
                    "type": "application/vnd.openstack.compute+xml;version=2"
                  }, {
                    "base": "application/json",
                    "type": "application/vnd.openstack.compute+json;version=2"
                  }],
                  "id": "v2.0",
                  "links": [{
                    "href": "http://23.253.228.211:8774/v2/",
                    "rel": "self"
                  }, {
                    "href": "http://docs.openstack.org/api/openstack-compute/2/os-compute-devguide-2.pdf",
                    "type": "application/pdf",
                    "rel": "describedby"
                  }, {
                    "href": "http://docs.openstack.org/api/openstack-compute/2/wadl/os-compute-2.wadl",
                    "type": "application/vnd.sun.wadl+xml",
                    "rel": "describedby"
                  }]
                }
              }
            }
          }
        }
      }
    }
  }
};

const petStore: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'title': 'Swagger Petstore',
    'description': 'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
    'termsOfService': 'http://SwaggerSchema.io/terms/',
    'contact': {
      'name': 'Swagger API Team',
      'email': 'foo@example.com',
      'url': 'http://madskristensen.net'
    },
    'license': {
      'name': 'MIT',
      'url': 'http://github.com/gruntjs/grunt/blob/master/LICENSE-MIT'
    }
  },
  'host': 'petstore.SwaggerSchema.io',
  'basePath': '/api',
  'schemes': [
    'http'
  ],
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'paths': {
    '/pets': {
      'get': {
        'description': 'Returns all pets from the system that the user has access to\nNam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.\n\nSed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.\n',
        'operationId': 'findPets',
        'parameters': [
          {
            'name': 'tags',
            'in': 'query',
            'description': 'tags to filter by',
            'required': false,
            'type': 'array',
            'collectionFormat': 'csv',
            'items': {
              'type': 'string'
            }
          },
          {
            'name': 'limit',
            'in': 'query',
            'description': 'maximum number of results to return',
            'required': false,
            'type': 'integer',
            'format': 'int32'
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/Pet'
              }
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      },
      'post': {
        'description': 'Creates a new pet in the store.  Duplicates are allowed',
        'operationId': 'addPet',
        'parameters': [
          {
            'name': 'pet',
            'in': 'body',
            'description': 'Pet to add to the store',
            'required': true,
            'schema': {
              '$ref': '#/definitions/NewPet'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              '$ref': '#/definitions/Pet'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    },
    '/pets/{id}': {
      'get': {
        'description': 'Returns a user based on a single ID, if the user does not have access to the pet',
        'operationId': 'find pet by id',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of pet to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              '$ref': '#/definitions/Pet'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      },
      'delete': {
        'description': 'deletes a single pet based on the ID supplied',
        'operationId': 'deletePet',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of pet to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '204': {
            'description': 'pet deleted'
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'Pet': {
      'type': 'object',
      'allOf': [
        {
          '$ref': '#/definitions/NewPet'
        },
        {
          'required': [
            'id'
          ],
          'properties': {
            'id': {
              'type': 'integer',
              'format': 'int64'
            }
          }
        }
      ]
    },
    'NewPet': {
      'type': 'object',
      'required': [
        'name'
      ],
      'properties': {
        'name': {
          'type': 'string'
        },
        'tag': {
          'type': 'string'
        }
      }
    },
    'Error': {
      'type': 'object',
      'required': [
        'code',
        'message'
      ],
      'properties': {
        'code': {
          'type': 'integer',
          'format': 'int32'
        },
        'message': {
          'type': 'string'
        }
      }
    }
  }
};

const minimal: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'title': 'Swagger Petstore',
    'description': 'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
    'termsOfService': 'http://SwaggerSchema.io/terms/',
    'contact': {
      'name': 'Swagger API Team'
    },
    'license': {
      'name': 'MIT'
    }
  },
  'host': 'petstore.SwaggerSchema.io',
  'basePath': '/api',
  'schemes': [
    'http'
  ],
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'paths': {
    '/pets': {
      'get': {
        'description': 'Returns all pets from the system that the user has access to',
        'produces': [
          'application/json'
        ],
        'responses': {
          '200': {
            'description': 'A list of pets.',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/Pet'
              }
            }
          }
        }
      }
    }
  },
  'definitions': {
    'Pet': {
      'type': 'object',
      'required': [
        'id',
        'name'
      ],
      'properties': {
        'id': {
          'type': 'integer',
          'format': 'int64'
        },
        'name': {
          'type': 'string'
        },
        'tag': {
          'type': 'string'
        }
      }
    }
  }
};

const simple: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'title': 'Swagger Petstore',
    'description': 'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
    'termsOfService': 'http://SwaggerSchema.io/terms/',
    'contact': {
      'name': 'Swagger API Team'
    },
    'license': {
      'name': 'MIT'
    }
  },
  'host': 'petstore.SwaggerSchema.io',
  'basePath': '/api',
  'schemes': [
    'http'
  ],
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'paths': {
    '/pets': {
      'get': {
        'description': 'Returns all pets from the system that the user has access to',
        'operationId': 'findPets',
        'produces': [
          'application/json',
          'application/xml',
          'text/xml',
          'text/html'
        ],
        'parameters': [
          {
            'name': 'tags',
            'in': 'query',
            'description': 'tags to filter by',
            'required': false,
            'type': 'array',
            'items': {
              'type': 'string'
            },
            'collectionFormat': 'csv'
          },
          {
            'name': 'limit',
            'in': 'query',
            'description': 'maximum number of results to return',
            'required': false,
            'type': 'integer',
            'format': 'int32'
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/Pet'
              }
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      },
      'post': {
        'description': 'Creates a new pet in the store.  Duplicates are allowed',
        'operationId': 'addPet',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'pet',
            'in': 'body',
            'description': 'Pet to add to the store',
            'required': true,
            'schema': {
              '$ref': '#/definitions/NewPet'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              '$ref': '#/definitions/Pet'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      }
    },
    '/pets/{id}': {
      'get': {
        'description': 'Returns a user based on a single ID, if the user does not have access to the pet',
        'operationId': 'findPetById',
        'produces': [
          'application/json',
          'application/xml',
          'text/xml',
          'text/html'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of pet to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              '$ref': '#/definitions/Pet'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      },
      'delete': {
        'description': 'deletes a single pet based on the ID supplied',
        'operationId': 'deletePet',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of pet to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '204': {
            'description': 'pet deleted'
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'Pet': {
      'type': 'object',
      'allOf': [
        {
          '$ref': '#/definitions/NewPet'
        },
        {
          'required': [
            'id'
          ],
          'properties': {
            'id': {
              'type': 'integer',
              'format': 'int64'
            }
          }
        }
      ]
    },
    'NewPet': {
      'type': 'object',
      'required': [
        'name'
      ],
      'properties': {
        'name': {
          'type': 'string'
        },
        'tag': {
          'type': 'string'
        }
      }
    },
    'ErrorModel': {
      'type': 'object',
      'required': [
        'code',
        'message'
      ],
      'properties': {
        'code': {
          'type': 'integer',
          'format': 'int32'
        },
        'message': {
          'type': 'string'
        }
      }
    }
  }
};

const externalDocs: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'title': 'Swagger Petstore',
    'description': 'A sample API that uses a petstore as an example to demonstrate features in the swagger-2.0 specification',
    'termsOfService': 'http://SwaggerSchema.io/terms/',
    'contact': {
      'name': 'Swagger API Team',
      'email': 'apiteam@SwaggerSchema.io',
      'url': 'http://SwaggerSchema.io'
    },
    'license': {
      'name': 'MIT',
      'url': 'http://github.com/gruntjs/grunt/blob/master/LICENSE-MIT'
    }
  },
  'externalDocs': {
    'description': 'find more info here',
    'url': 'https://SwaggerSchema.io/about'
  },
  'host': 'petstore.SwaggerSchema.io',
  'basePath': '/api',
  'schemes': [
    'http'
  ],
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'paths': {
    '/pets': {
      'get': {
        'description': 'Returns all pets from the system that the user has access to',
        'operationId': 'findPets',
        'externalDocs': {
          'description': 'find more info here',
          'url': 'https://SwaggerSchema.io/about'
        },
        'produces': [
          'application/json',
          'application/xml',
          'text/xml',
          'text/html'
        ],
        'parameters': [
          {
            'name': 'tags',
            'in': 'query',
            'description': 'tags to filter by',
            'required': false,
            'type': 'array',
            'items': {
              'type': 'string'
            },
            'collectionFormat': 'csv'
          },
          {
            'name': 'limit',
            'in': 'query',
            'description': 'maximum number of results to return',
            'required': false,
            'type': 'integer',
            'format': 'int32'
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/Pet'
              }
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      },
      'post': {
        'description': 'Creates a new pet in the store.  Duplicates are allowed',
        'operationId': 'addPet',
        'produces': [
          'application/json'
        ],
        'parameters': [
          {
            'name': 'pet',
            'in': 'body',
            'description': 'Pet to add to the store',
            'required': true,
            'schema': {
              '$ref': '#/definitions/NewPet'
            }
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              '$ref': '#/definitions/Pet'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      }
    },
    '/pets/{id}': {
      'get': {
        'description': 'Returns a user based on a single ID, if the user does not have access to the pet',
        'operationId': 'findPetById',
        'produces': [
          'application/json',
          'application/xml',
          'text/xml',
          'text/html'
        ],
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of pet to fetch',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '200': {
            'description': 'pet response',
            'schema': {
              '$ref': '#/definitions/Pet'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      },
      'delete': {
        'description': 'deletes a single pet based on the ID supplied',
        'operationId': 'deletePet',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of pet to delete',
            'required': true,
            'type': 'integer',
            'format': 'int64'
          }
        ],
        'responses': {
          '204': {
            'description': 'pet deleted'
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/ErrorModel'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'Pet': {
      'type': 'object',
      'allOf': [
        {
          '$ref': '#/definitions/NewPet'
        },
        {
          'required': [
            'id'
          ],
          'properties': {
            'id': {
              'type': 'integer',
              'format': 'int64'
            }
          }
        }
      ]
    },
    'NewPet': {
      'type': 'object',
      'required': [
        'name'
      ],
      'properties': {
        'name': {
          'type': 'string'
        },
        'tag': {
          'type': 'string'
        }
      }
    },
    'ErrorModel': {
      'type': 'object',
      'required': [
        'code',
        'message'
      ],
      'properties': {
        'code': {
          'type': 'integer',
          'format': 'int32'
        },
        'message': {
          'type': 'string'
        }
      }
    }
  }
};

const petstore: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'title': 'Swagger Petstore',
    'license': {
      'name': 'MIT'
    }
  },
  'host': 'petstore.SwaggerSchema.io',
  'basePath': '/v1',
  'schemes': [
    'http'
  ],
  'consumes': [
    'application/json'
  ],
  'produces': [
    'application/json'
  ],
  'paths': {
    '/pets': {
      'get': {
        'summary': 'List all pets',
        'operationId': 'listPets',
        'tags': [
          'pets'
        ],
        'parameters': [
          {
            'name': 'limit',
            'in': 'query',
            'description': 'How many items to return at one time (max 100)',
            'required': false,
            'type': 'integer',
            'format': 'int32'
          }
        ],
        'responses': {
          '200': {
            'description': 'An paged array of pets',
            'headers': {
              'x-next': {
                'type': 'string',
                'description': 'A link to the next page of responses'
              }
            },
            'schema': {
              '$ref': '#/definitions/Pets'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      },
      'post': {
        'summary': 'Create a pet',
        'operationId': 'createPets',
        'tags': [
          'pets'
        ],
        'responses': {
          '201': {
            'description': 'Null response'
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    },
    '/pets/{petId}': {
      'get': {
        'summary': 'Info for a specific pet',
        'operationId': 'showPetById',
        'tags': [
          'pets'
        ],
        'parameters': [
          {
            'name': 'petId',
            'in': 'path',
            'required': true,
            'description': 'The id of the pet to retrieve',
            'type': 'string'
          }
        ],
        'responses': {
          '200': {
            'description': 'Expected response to a valid request',
            'schema': {
              '$ref': '#/definitions/Pets'
            }
          },
          'default': {
            'description': 'unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'Pet': {
      'required': [
        'id',
        'name'
      ],
      'properties': {
        'id': {
          'type': 'integer',
          'format': 'int64'
        },
        'name': {
          'type': 'string'
        },
        'tag': {
          'type': 'string'
        }
      }
    },
    'Pets': {
      'type': 'array',
      'items': {
        '$ref': '#/definitions/Pet'
      }
    },
    'Error': {
      'required': [
        'code',
        'message'
      ],
      'properties': {
        'code': {
          'type': 'integer',
          'format': 'int32'
        },
        'message': {
          'type': 'string'
        }
      }
    }
  }
};

const uber: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'title': 'Uber API',
    'description': 'Move your app forward with the Uber API',
    'version': '1.0.0'
  },
  'host': 'api.uber.com',
  'schemes': [
    'https'
  ],
  'basePath': '/v1',
  'produces': [
    'application/json'
  ],
  'paths': {
    '/products': {
      'get': {
        'summary': 'Product Types',
        'description': 'The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order.',
        'parameters': [
          {
            'name': 'latitude',
            'in': 'query',
            'description': 'Latitude component of location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          },
          {
            'name': 'longitude',
            'in': 'query',
            'description': 'Longitude component of location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          }
        ],
        'tags': [
          'Products'
        ],
        'responses': {
          '200': {
            'description': 'An array of products',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/Product'
              }
            }
          },
          'default': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    },
    '/estimates/price': {
      'get': {
        'summary': 'Price Estimates',
        'description': 'The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier.',
        'parameters': [
          {
            'name': 'start_latitude',
            'in': 'query',
            'description': 'Latitude component of start location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          },
          {
            'name': 'start_longitude',
            'in': 'query',
            'description': 'Longitude component of start location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          },
          {
            'name': 'end_latitude',
            'in': 'query',
            'description': 'Latitude component of end location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          },
          {
            'name': 'end_longitude',
            'in': 'query',
            'description': 'Longitude component of end location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          }
        ],
        'tags': [
          'Estimates'
        ],
        'responses': {
          '200': {
            'description': 'An array of price estimates by product',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/PriceEstimate'
              }
            }
          },
          'default': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    },
    '/estimates/time': {
      'get': {
        'summary': 'Time Estimates',
        'description': 'The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.',
        'parameters': [
          {
            'name': 'start_latitude',
            'in': 'query',
            'description': 'Latitude component of start location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          },
          {
            'name': 'start_longitude',
            'in': 'query',
            'description': 'Longitude component of start location.',
            'required': true,
            'type': 'number',
            'format': 'double'
          },
          {
            'name': 'customer_uuid',
            'in': 'query',
            'type': 'string',
            'format': 'uuid',
            'description': 'Unique customer identifier to be used for experience customization.'
          },
          {
            'name': 'product_id',
            'in': 'query',
            'type': 'string',
            'description': 'Unique identifier representing a specific product for a given latitude & longitude.'
          }
        ],
        'tags': [
          'Estimates'
        ],
        'responses': {
          '200': {
            'description': 'An array of products',
            'schema': {
              'type': 'array',
              'items': {
                '$ref': '#/definitions/Product'
              }
            }
          },
          'default': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    },
    '/me': {
      'get': {
        'summary': 'User Profile',
        'description': 'The User Profile endpoint returns information about the Uber user that has authorized with the application.',
        'tags': [
          'User'
        ],
        'responses': {
          '200': {
            'description': 'Profile information for a user',
            'schema': {
              '$ref': '#/definitions/Profile'
            }
          },
          'default': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    },
    '/history': {
      'get': {
        'summary': 'User Activity',
        'description': 'The User Activity endpoint returns data about a user\'s lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.',
        'parameters': [
          {
            'name': 'offset',
            'in': 'query',
            'type': 'integer',
            'format': 'int32',
            'description': 'Offset the list of returned results by this amount. Default is zero.'
          },
          {
            'name': 'limit',
            'in': 'query',
            'type': 'integer',
            'format': 'int32',
            'description': 'Number of items to retrieve. Default is 5, maximum is 100.'
          }
        ],
        'tags': [
          'User'
        ],
        'responses': {
          '200': {
            'description': 'History information for the given user',
            'schema': {
              '$ref': '#/definitions/Activities'
            }
          },
          'default': {
            'description': 'Unexpected error',
            'schema': {
              '$ref': '#/definitions/Error'
            }
          }
        }
      }
    }
  },
  'definitions': {
    'Product': {
      'properties': {
        'product_id': {
          'type': 'string',
          'description': 'Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.'
        },
        'description': {
          'type': 'string',
          'description': 'Description of product.'
        },
        'display_name': {
          'type': 'string',
          'description': 'Display name of product.'
        },
        'capacity': {
          'type': 'string',
          'description': 'Capacity of product. For example, 4 people.'
        },
        'image': {
          'type': 'string',
          'description': 'Image URL representing the product.'
        }
      }
    },
    'PriceEstimate': {
      'properties': {
        'product_id': {
          'type': 'string',
          'description': 'Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles'
        },
        'currency_code': {
          'type': 'string',
          'description': '[ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.'
        },
        'display_name': {
          'type': 'string',
          'description': 'Display name of product.'
        },
        'estimate': {
          'type': 'string',
          'description': 'Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI.'
        },
        'low_estimate': {
          'type': 'number',
          'description': 'Lower bound of the estimated price.'
        },
        'high_estimate': {
          'type': 'number',
          'description': 'Upper bound of the estimated price.'
        },
        'surge_multiplier': {
          'type': 'number',
          'description': 'Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.'
        }
      }
    },
    'Profile': {
      'properties': {
        'first_name': {
          'type': 'string',
          'description': 'First name of the Uber user.'
        },
        'last_name': {
          'type': 'string',
          'description': 'Last name of the Uber user.'
        },
        'email': {
          'type': 'string',
          'description': 'Email address of the Uber user'
        },
        'picture': {
          'type': 'string',
          'description': 'Image URL of the Uber user.'
        },
        'promo_code': {
          'type': 'string',
          'description': 'Promo code of the Uber user.'
        }
      }
    },
    'Activity': {
      'properties': {
        'uuid': {
          'type': 'string',
          'description': 'Unique identifier for the activity'
        }
      }
    },
    'Activities': {
      'properties': {
        'offset': {
          'type': 'integer',
          'format': 'int32',
          'description': 'Position in pagination.'
        },
        'limit': {
          'type': 'integer',
          'format': 'int32',
          'description': 'Number of items to retrieve (100 max).'
        },
        'count': {
          'type': 'integer',
          'format': 'int32',
          'description': 'Total number of items available.'
        },
        'history': {
          'type': 'array',
          'items': [
            {
              '$ref': '#/definitions/Activity'
            }
          ]
        }
      }
    },
    'Error': {
      'properties': {
        'code': {
          'type': 'integer',
          'format': 'int32'
        },
        'message': {
          'type': 'string'
        },
        'fields': {
          'type': 'string'
        }
      }
    }
  }
};

const basicAuth: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': { 'version': '1.0.0', 'title': 'Minimal example with basic auth'},
  'schemes': [
    'https'
  ],
  'paths': {},
  'securityDefinitions': {
    basicAuth: { type: 'basic' },
  },
  'security': [{basicAuth: []}]
};

// $FlowExpectedError
const wrongSchema: SwaggerSchema.Spec = {
  'info': {
    'title': 'Simple API overview',
    'version': 'v2'
  }
}

const wrongPaths: SwaggerSchema.Spec = {
  'swagger': '2.0',
  'info': {
    'title': 'Simple API overview',
    'version': 'v2'
  },
  'paths': {
    '/': {
      // $FlowExpectedError
      'get': {
        'operationId': 'listVersionsv2',
        'summary': 'List API versions - No responses',
        'produces': ['application/json']
      }
    }
  }
}
