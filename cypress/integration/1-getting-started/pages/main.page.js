
class MainPage {
    searchInputFiledInHeader(){
        return cy.get ('input#txtGlobalSearch')
    }
    linkToSalaryPage(){
        return cy.get ('a[href="https://jobs.dou.ua/salaries/"]')
    }

    linkInHeader(){
        return cy.get('header.b-head a');
    }
}

export default MainPage