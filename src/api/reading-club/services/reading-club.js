'use strict';

/**
 * reading-club service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reading-club.reading-club');
