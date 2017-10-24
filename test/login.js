import { Selector } from 'testcafe';

fixture `Login test`
    .page `http://localhost:3030`;

test('Admin login', async t => {
    await t
        .typeText('input[name="username"]', 'admin@test')
        .typeText('input[name="password"]', 'admin')
        .click('button')

        // Use the assertion to check if the actual H1 text is equal to the expected one
        .expect(Selector('#root').find('h1').innerText).eql('Admin on REST');
      
});

test('User login', async t => {
    await t
        .typeText('input[name="username"]', 'user@test')
        .typeText('input[name="password"]', 'user')
        .click('button')

        // Use the assertion to check if the actual H1 text is equal to the expected one
        .expect(Selector('#root').find('h1').innerText).eql('Admin on REST');
      
});

test('Invalid login', async t => {
    await t
        .typeText('input[name="username"]', 'invalidUser@test')
        .typeText('input[name="password"]', 'user')
        .click('button')

        // Use the assertion to check if the actual text field exist
        .expect(Selector('#root').find('h1').exists).notOk();      
});

