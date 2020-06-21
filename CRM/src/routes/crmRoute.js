import { addNewContact,
        getContacts
} from '../controllers/crmController';


const routes = (app) => {
    app.route('/contact')
    .get((req,res,next)=>{

        console.log('request from ');
        next();
    }, getContacts)
    .post(addNewContact);


}
export default routes;