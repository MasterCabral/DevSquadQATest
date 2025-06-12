import { test, expect } from '@playwright/test';

//Esse é o input ideal do usuário 
test('Ideal user input', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.type('input[name="countryPrefix"]', '55');

  await page.type('input[name="phone"]', '9999999999');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.type('textarea[name="address"]', 'Vossa street, vossa house');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.getByText('Business').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('I agree to the Terms and Conditions').click();

  await page.getByText('Submit').click();
});

//Esse é o input ideal do usuário com apenas os required fields
test('Ideal user input only required fields', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação quando o usuário não preenche nada
//Esse usuário não será criado
test('Only submit user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.getByText('Submit').click();
});

//Essa é a situação onde o usuário só preenche os campos não obrigatórios
//Esse usuário não será criado
test('Only non-required fields user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="countryPrefix"]', '55');

  await page.type('input[name="phone"]', '9999999999');

  await page.type('textarea[name="address"]', 'Vossa street, vossa house');

  await page.getByText('Business').click();

  await page.getByText('I agree to the Terms and Conditions').click();

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botar números no nome
test('Number name user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', '77348');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botar números no nome
test('Number name user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', '77348');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botar simbolos no nome
test('Symbol name user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', ':><>:<>:::');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário não botar nome
// Esse usuário não será criado
test('No name user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botando um email sem @
test('No @ email user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossalossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário quando ele não bota o email
//Esse usuário não será criado
test('No email user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botando uma data de nascimento maior que a data atual
test('Future birth date user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2030-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário sem preencher a sua data de nascimento
//Esse usuário não será criado
test('No birth date user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botando um estado diferente do seu país
test('Other country state user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('Alaska').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário sem preencher o país
//Esse usuário não será criado e o estado não será selecionado
test('No country user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário sem preencher o estado
//Esse usuário não será criado 
test('No state user', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.type('input[name="annualIncome"]', '3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário botando Annual income negativo
test('Negative annual income', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.type('input[name="annualIncome"]', '-3000');

  await page.getByText('Submit').click();
});

//Essa é a situação do usuário sem Annual income
//Esse usuário não será criado
test('No annual income', async ({ page }) => {
  await page.goto('https://qa-training.sbx.devsquad.app/');

  await page.type('input[name="name"]', 'Vossa the first');

  await page.type('input[name="email"]', 'Vossa@lossa.com');

  await page.fill('input[name="dateOfBirth"]', '2005-06-11');

  await page.getByText('Select a country...').click();

  await page.getByText('Brazil').click();

  await page.getByText('Select a state...').click();

  await page.getByText('São Paulo').click();

  await page.getByText('Submit').click();
});