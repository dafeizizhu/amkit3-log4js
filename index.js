const format = require('date-format')

let console = global.console || window.console

if (!console) {
  console = {}
}
if (!console.log) {
  console.log = () => {}
}

let level = typeof window !== 'undefined'
  ? window.localStorage.getItem('amkit3-log4js-level') || 'INFO'
  : 'INFO'

let log = (l, name, args) => {
  try {
    console.log.apply(console, ['[' + format() + '][' + l + '] - ' + name].concat(args))
  } catch (_) {
  }
}

exports.getLogger = name => {
  return {
    debug: (...args) => {
      switch (level) {
        case 'DEBUG':
          log('DEBUG', name, args)
      }
    },
    info: (...args) => {
      switch (level) {
        case 'DEBUG':
        case 'INFO':
          log('INFO', name, args)
      }
    },
    warn: (...args) => {
      switch (level) {
        case 'DEBUG':
        case 'INFO':
        case 'WARN':
          log('WARN', name, args)
      }
    }
  }
}
