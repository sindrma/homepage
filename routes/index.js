
/*
 * GET home page.
 */

export function index(req, res){
  res.render('index', {title: 'Homepage', name: 'Sindre' })
}
