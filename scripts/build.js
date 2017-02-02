const registry = require('package-stream')({
  db: 'https://replicate.npmjs.com'
})
const ora = require('ora')
const removeValue = require('lodash').pull
const spinner = ora('Loading').start()
var names = Object.keys(require('download-counts'))
var totalPackages = 0

registry
  .on('package', function (pkg) {
    spinner.text = String(++totalPackages)
    if (pkg && pkg.bin) return
    removeValue(names, pkg.name)
  })
  .on('up-to-date', function () {
    process.stdout.write(JSON.stringify(names, null, 2))
    process.exit()
  })
