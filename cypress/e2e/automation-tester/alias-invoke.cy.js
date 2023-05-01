/// <reference types="cypress" />
describe('Iterate over elements', () => {
    it.only('Log information over haircare product', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path']").contains('Hair Care').click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('pdThumbnail')
        cy.get('@pdThumbnail').its('length').should('be.gt', 5)
        cy.get('@pdThumbnail').should('include', 'Seaweed Conditioner')
    })

    it('count number of product class thumbnail', () => {
        cy.visit('https://www.automationteststore.com/')
        //use alias and invoke
        cy.get('.thumbnail').invoke('text').as('product')
        cy.get('@product').its('length').should('be.gt', 15)

    })

    it('Test cart button', () => {
        cy.visit('https://www.automationteststore.com/')
        //use alias and invoke
        cy.get('.thumbnail').as('product1')
        cy.get('@product1').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it('Test normal and Non-sale product', () => {
        cy.visit('https://www.automationteststore.com/')
        //use alias and invoke
        cy.get('.thumbnail').as('product1')
        // cy.get('@product1').find('.oneprice').each(($el, index, $list)=>{
        //   cy.log($el.text())
        // })
        cy.get('@product1').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@itemPrice').then($linkText =>{
            var itemPriceTotal =0;
            var itemPrice = $linkText.split('$')
            var i
            for(i = 0; i< itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
                cy.log("Total Price: "+itemPriceTotal)
            }

            cy.log("Non-sale Items count:"+ itemPrice.length)
        })
    })

    it('Test normal and sale product', () => {
        cy.visit('https://www.automationteststore.com/')
        //use alias and invoke
        cy.get('.thumbnail').as('product1')
        // cy.get('@product1').find('.oneprice').each(($el, index, $list)=>{
        //   cy.log($el.text())
        // })
        cy.get('@product1').find('.pricenew').invoke('text').as('saleitemPrice')
        cy.get('@saleitemPrice').then($linkText=>{
            var saleitemPrice = $linkText.split('$')
            var saleitemPriceTotal =0
            var i
            for(i=0; i<saleitemPrice.length; i++){
                cy.log(saleitemPrice[i])
                saleitemPriceTotal+=Number(saleitemPrice[i])
            }
            cy.log("Total Price: "+saleitemPriceTotal)

            cy.log("Total Sale price item: "+saleitemPrice.length)
        })
    })
});