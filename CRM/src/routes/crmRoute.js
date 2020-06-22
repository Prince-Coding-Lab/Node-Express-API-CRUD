import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from '../controllers/crmController';


const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{

        console.log('request from ');
        next();
    }, getContacts)
    .post(addNewContact);

    app.route('/contact/:contactID')
         //get specific contact
        .get(getContactWithID)

        //update specific contact
        .put(updateContact)

        //detele a specific contact
        .delete(deleteContact)
}
export default routes;