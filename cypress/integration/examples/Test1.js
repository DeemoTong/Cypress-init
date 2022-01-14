///<reference types = "Cypress" />

describe('My First Test Suite',function(){
    it('My FirstTest Case', function(){
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //select element from entire page
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //select element from target DOM
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })
        //cy.contains('ADD TO CART')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })

        cy.get(`.brand`).should('have.text','GREENKART')

        
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        const logo=cy.get('.brand')
        




        
    })

   



})