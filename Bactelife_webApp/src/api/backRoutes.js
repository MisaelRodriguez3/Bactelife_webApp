import axios from "./axios";

//auhtRotes -> admin

export const registerRequest = (user) => axios.post('/register', user);
export const loginRequest = (user) => axios.post('/login', user);
export const verifyTokenRequest = () => axios.get('/verify');
export const getAdminsRequest = () => axios.get('/admins'); export const addAdminRequest = (user) => axios.post('/admin', user);
export const updateAdminRequest = (user) => axios.put(`/update-admin/${user._id}`, user);
export const deleteAdminRequest = (id) => axios.delete(`/delete-admin/${id}`);
export const logoutRequest = () => axios.post('/logout')

//productRoutes

export const getProductRequest = (id) => axios.get(`/product/${id}`);
export const getProductsRequest = () => axios.get('/products');
export const addProductRequest = (product) => axios.post('/product', product);
export const updateProductRequest = (product) => axios.put(`/update-product/${product._id}`, product);
export const deleteProductRequest = (id) => axios.delete(`/delete-product/${id}`);

//caseStudiesRoutes

export const getCaseRequest = (id) => axios.get(`/Case/${id}`);
export const getCasesRequest = () => axios.get('/Cases');
export const addCaseRequest = (Case) => axios.post('/Case', Case);
export const updateCaseRequest = (Case) => axios.put(`/update-Case/${Case._id}`, Case);
export const deleteCaseRequest = (id) => axios.delete(`/delete-Case/${id}`);

//memeberRotes

export const getMemberRequest = (id) => axios.get(`/member/${id}`);
export const getMembersRequest = () => axios.get('/members');
export const addMemberRequest = (member) => axios.post('/member', member);
export const updateMemberRequest = (member) => axios.put(`/update-member/${member._id}`, member);
export const deleteMemberRequest = (id) => axios.delete(`/delete-member/${id}`);