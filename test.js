const logger = require('./index').getLogger('foo')

logger.debug('debug', 'foo', 'bar')
logger.info('info', 'foo', 'bar')
logger.warn('warn', 'foo', 'bar')
