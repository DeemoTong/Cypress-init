///<reference types = "Cypress" />

describe('My Second Test Suite',function(){
    it('My FirstTest Case', function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //select element from entire page
        //select element from target DOM
        cy.get('.products').as('productLocator')
        //cy.contains('ADD TO CART')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()

    })

})