const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

/* const enviarEmails = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(enviarEmails); */

const enviarEmails = (email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
emailListInData.forEach(enviarEmails);