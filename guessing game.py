import random
magic_number = random.randint(1, 10)
your_guess = int(input("What is your guess?: "))

while your_guess != magic_number:
    if your_guess > magic_number:
        print("higher")
        your_guess = int(input("What is your guess?: "))
    elif your_guess < magic_number:
        print("lower")
        your_guess = int(input("What is your guess?: "))
print("You guessed it!")
play_again = input('do you want to play again?(Y/N): ').lower()
if play_again == "y":
    while your_guess != magic_number:
        if your_guess > magic_number:
            print("higher")
            your_guess = int(input("What is your guess?: "))
        elif your_guess < magic_number:
            print("lower")
            your_guess = int(input("What is your guess?: "))
    print("You guessed it!")
else:
    print('Goodbye!')
