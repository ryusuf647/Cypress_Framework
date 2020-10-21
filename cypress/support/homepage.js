class homepage  {
    getName()   {   //Get name text box
        return cy.get("input[name='name']:nth-child(2)")
    }
    getGender() {   //Get gender dropdown
        return cy.get("#exampleFormControlSelect1")
    }
    getErbtn()  {   //Get entrepreneur radio button
        return cy.get("#inlineRadio3")
    }
    getTWBind() {   //Get two way bind text box
        return cy.get("input[name='name']:nth-child(1)")
    }
    getShop()   {   //Get Shop menu item
        return cy.get("[href='/angularpractice/shop']")
    }
    getCheckOut()   {   //single element from separate page, adding here
        return cy.get(".nav-link.btn.btn-primary")                    
    }
    getItemPrices() {
        return cy.get("tr td:nth-child(4) strong")
    }
    getChkOut() {
        return cy.contains("Checkout")
    }
    getCountry()    {
        return cy.get("#country")
    }
    selCountry()    {
        return cy.get('.suggestions > ul > li > a')
    }
    getConsent()    {
        return cy.get(".checkbox")
    }
    getPurBtn() {
        return cy.get("input[type='submit']")
    }
    getConf()   {
        return cy.get(".alert")
    }
    getPgTotal()    {
        return cy.get("h3 strong")
    }
}              
export default homepage;