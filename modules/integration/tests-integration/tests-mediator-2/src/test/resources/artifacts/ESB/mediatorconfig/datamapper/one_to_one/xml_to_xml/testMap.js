function map_S_Envelope_S_company( ){
var outputcompany={};

outputcompany = {};
outputcompany.offices = {};
outputcompany.offices.asiaoffice = {};
outputcompany.offices.europeoffice = {};
outputcompany.offices.usoffice = {};


outputcompany.offices.asiaoffice.fax = inputsoapenv_Envelope.soapenv_Body.company.usoffice.fax;
outputcompany.offices.asiaoffice.phone = inputsoapenv_Envelope.soapenv_Body.company.usoffice.phone;
outputcompany.offices.asiaoffice.address = inputsoapenv_Envelope.soapenv_Body.company.usoffice.address.street;
outputcompany.offices.europeoffice.fax = inputsoapenv_Envelope.soapenv_Body.company.asiaoffice.fax;
outputcompany.offices.europeoffice.phone = inputsoapenv_Envelope.soapenv_Body.company.asiaoffice.phone;
outputcompany.offices.europeoffice.address = inputsoapenv_Envelope.soapenv_Body.company.asiaoffice.address.street;
outputcompany.offices.usoffice.phone = inputsoapenv_Envelope.soapenv_Body.company.europeoffice.phone;
outputcompany.offices.usoffice.address = inputsoapenv_Envelope.soapenv_Body.company.europeoffice.address.street;
return outputcompany;
}