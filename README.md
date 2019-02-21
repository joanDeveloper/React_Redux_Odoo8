## React/Redux with Odoo 8 - SMART DEVICES -

- Funcionality:
    1. Contact
    2. List/Details
    3. Relationships (devices with categories)
    4. Pagination
    5. Filter by tags (categories)
    6. Signin/Signup
    7. JWT

- Improvements:
    1. ReduxForm in Contact
    2. Reuse components (ListPagination,ListErrors,DeviceList,DevicePreview)
    3. Create Api view to make a CRUD from the backend Odoo
    4. Check token if expired or if it's invalid by the secret (middleware)
    5. Autocomplete React-material-ui
    6. Design web with scss (mixins, transforms, animations, media queries)
    7. Show offers (from backend Odoo you can control it)
    8. React Hooks
    9. Carousel (react-responsive-carousel)
    10. Optimization Credentials in backend odoo
    11. Connect and adapt odoo backend to make requests
    12. Device's Comments

- CSS:
    1. scss ( mixins, variables, media queries, transforms, animations )
    2. fonts ( body:Lato,title-principal and menu:Coiny ) -> http://www.weloveiconfonts.com/
    3. icons ( footer:social networks ) -> http://www.weloveiconfonts.com/
    4. forms -> src/components/Settings, src/components/Comments
    5. responsive -> Home, Detail(flexbox)
    6. animations -> home list, offers (mixins)
    7. metodology BEM
    8. media svg in home
    9. menu responsive -> src/components/Header
    10. Accessibility -> alt images, tabIndex in home,nav,footer, label in form Setting and Comment 
