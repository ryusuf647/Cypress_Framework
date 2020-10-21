/// <reference types="Cypress" />
import homepage from "../support/homepage.js"

describe('Cypress Framework Suite', function()  {
    
    before(function()   {
        //runs once before all tests in the block
        cy.fixture("tfw").then(function(data)   {
            this.fw_data=data
        }   )
    }   )

    it('Test Case 1', function() {
        const hp = new homepage()
        cy.visit(Cypress.env("url") + "/angularpractice/")
        hp.getName().type(this.fw_data.name)
        hp.getGender().select(this.fw_data.gender)
        hp.getTWBind().should("have.value", this.fw_data.name) //Confirm name displayed is correct - First way
        hp.getName().should("have.attr", "minlength", this.fw_data.minlength) //Confirm min length of name
        hp.getErbtn().should("be.disabled")
        //cy.pause()
        hp.getShop().click().url().should("include", this.fw_data.shop_url)
        this.fw_data.productName.forEach(function(element)  {
            cy.selectProduct(element)
        }   );
        hp.getCheckOut().click()
        var sum=0   
        hp.getItemPrices().each(($e1, index, $list) =>  {
            var prices = $e1.text().split(" ")
            sum=Number(sum)+Number(prices[1])
        }   )   .then(function()    {
            cy.log(sum)
        }   )
        hp.getPgTotal().then(function(element)  {
            var totalprice = element.text()
            var atotal = totalprice.split(" ")
            expect(Number(atotal[1])).to.equal(sum)
        }   )
        hp.getChkOut().click()

        hp.getCountry().type(this.fw_data.country)
        cy.get(".suggestions > ul > li > a").click()
        hp.getCountry().should("include.value", this.fw_data.country)
        hp.getConsent().click({force: true})
        hp.getPurBtn().click()
        hp.getConf().should("include.text", this.fw_data.confirm_text)  //First assertion
        hp.getConf().then((element) =>  {   //Second assertion (per lecture)
            expect(element.text().includes(this.fw_data.confirm_text)).to.be.true
        }   )
    }   )
}   )