//File config
//Used to store global variable for initial run

//This variable store host to be called, change this variable if you need to call other host
module.exports.host_prod = 'https://www.tokopedia.com';
module.exports.host_stag = 'https://staging.tokopedia.com';
module.exports.host_m_prod = 'https://m.tokopedia.com';
module.exports.host_pay_stag = 'https://pay-staging.tokopedia.com';
module.exports.host_pay_pci_stag = 'https://pay-staging.tokopedia.id';
module.exports.m_payment_confirm = 'https://m.tokopedia.com/payment-confirm';
module.exports.cookie_stag = '_SID_Tokopedia_Coba_';
module.exports.cookie_prod = '_SID_Tokopedia_';

module.exports.host_prod2 = 'https://accounts.tokopedia.com/authorize?client_id=1001&p=https%3A%2F%2Fwww.tokopedia.com&redirect_uri=https%3A%2F%2Fwww.tokopedia.com%2Fappauth%2Fcode&response_type=code&state=eyJyZWYiOiJodHRwczovL3d3dy50b2tvcGVkaWEuY29tIiwidXVpZCI6IjQ2ZGI2N2JjLTUxOTktNDIxZS1hNjdkLWNkYzAyZTRjOTYwOCJ9';
module.exports.host_stag2 = 'https://accounts-staging.tokopedia.com/authorize?client_id=1234&p=https%3A%2F%2Fstaging.tokopedia.com&redirect_uri=https%3A%2F%2Fstaging.tokopedia.com%2Fappauth%2Fcode&response_type=code&state=eyJyZWYiOiJodHRwczovL3N0YWdpbmcudG9rb3BlZGlhLmNvbSIsInV1aWQiOiIwNTRiMDcyZS1hYWE1LTRmOWMtOTkyMS1jNzY3NTk5OWYyYWQiLCJ0aGVtZSI6ImRlZmF1bHQifQ&theme=default';

module.exports.intools_prod = 'https://internal.tokopedia.com';
module.exports.intools_stag = 'https://internal-staging.tokopedia.com';

module.exports.host_wd_prod = 'https://www.tokopedia.com/deposit.pl?nref=dside';

module.exports.host_goal_stag = 'https://goalapi-staging.tokopedia.com'
module.exports.host_goal_prod = 'https://goalapi.tokopedia.com'