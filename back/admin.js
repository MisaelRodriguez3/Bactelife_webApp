import AdminBro from 'admin-bro';
import expressAdminBro from '@admin-bro/express';
import mongooseAdminBro from '@admin-bro/mongoose';
import Product from './models/products.model.js';
import Case from './models/caseStudies.model.js';
import Member from './models/members.model.js';

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = { resources: [Case, Product, Member] };

const adminBro = new AdminBro(AdminBroOptions);
const route = expressAdminBro.buildRouter(adminBro);

export { route, adminBro };