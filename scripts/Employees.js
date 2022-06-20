import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, id] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(id)) {
                    let ordernumbers = []
                    for (const order of orders) {
                        if (order.employeeId === employee.id)
                        ordernumbers.push(order)
                    }
            
                    window.alert(`${employee.name} has sold ${ordernumbers.length} items.`)
                    
                }
            }
        }
    }
)
const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const orders = getOrders()

