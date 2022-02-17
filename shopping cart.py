print('Welcome to the Shopping Cart Program!')
shopping_cart = []
choose_option = ""
prices = []
total = 0
while choose_option != 6:
    shopping_program_options = ['1. Add item', '2. View cart',
                                '3. Remove item', '4. replace item ', '5. Compute total', '6. Quit']
    print("Please select one of the following: ")
    for option in shopping_program_options:
        print(option)
    choose_option = int(input("Please enter an action: "))
    if choose_option == 1:
        shopping_cart_item = input("What item would you like to add? ")
        shopping_cart.append(shopping_cart_item)
        shopping_cart_item_price = float(
            input(f"What is the price of '{shopping_cart_item}'? "))
        prices.append(shopping_cart_item_price)
        print(f"'{shopping_cart_item}' has been added to the cart.")
    elif choose_option == 2:
        print("The contents of the shopping cart are: ")
        for i in range(len(shopping_cart)):
            shopping_cart_item = shopping_cart[i]
            print(f"{i+1}. {shopping_cart[i]} - ${prices[i]:.2f}")
    elif choose_option == 3:
        index = int(input("Which item would you like to remove? "))
        shopping_cart.pop(index-1)
        prices.pop(index-1)
        print("item removed")
    elif choose_option == 4:
        index = int(input("Which item would you like to change? "))
        new_item = input("What is the new item? ")
        new_price = float(input("What is the new price? "))
        shopping_cart[index - 1] = new_item
        prices[index - 1] = new_price
        print("item replaced")
    elif choose_option == 5:
        for i in range(len(prices)):
            total += prices[i]
        print(
            f"The total price of the items in the shopping cart is ${total:.2f}")


print("Thank you. Goodbye.")
