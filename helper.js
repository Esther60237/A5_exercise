const Handlebars = require('handlebars')
Handlebars.registerHelper('ifSame', function (choose, career, option) {
  if (choose === career) {
    return option.fn(this)
  }
  return option.inverse(this)

})