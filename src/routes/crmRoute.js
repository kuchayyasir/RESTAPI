import {addNewContact,getContacts,getContact,contactUpdate,contactDelete} from '../controllers/crmController';
const routes = (app) =>{
  app.route('/contact')
  .get((req,res,next)=>{
    console.log(`Request From : ${req.originalUrl}`)
    console.log(`Request From : ${req.method}`)
    next();
  },getContacts
)
  .post(addNewContact);

  app.route('/contact/:contactId')
  .get(getContact)
  .put(contactUpdate)
  .delete(contactDelete);
}

export default routes;
