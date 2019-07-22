module.exports = createPageObjects({
    Home: {
        actions: {
            iSearchForProduct: function() {
                var search = element(by.control({
                    id: 'searchField',
                    viewName: 'sap.ui.demo.cart.view.Home',
                    interaction: "focus"    // interact with the focused element e.g. the input field
                }))
                search.sendKeys('Watch');
            },
            iSelectTheFirstProduct: function() {
                var text = element(by.control({
                    controlType: 'sap.m.Text',
                    properties: {
                        text: 'Flat Watch HD32'
                    }
                }));
                text.click();
            }
        },
        assertions: {
            iShouldSeeAllCategories: function () {
                var list = element.all(by.control({
                    controlType: 'sap.m.StandardListItem',
                }));
                expect(list.count()).toBe(16);
            },
            theProductListShouldBeFiltered: function() {
                var list = element.all(by.control({
                    controlType: 'sap.m.ObjectListItem',
                }));
                var firstItem = list.get(0);
                expect(firstItem.asControl().getProperty('title')).toBe('Flat Watch HD32');
            }
        }
    }
  });