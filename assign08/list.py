print('Enter a list of numbers, type 0 when finished.')

number = []
new_number = ''
count = -1
sum = 0

while new_number != 0:
    for new_number in number:
        print(new_number)
        new_number = input("Enter number: ")
        count += 1
        sum += new_number   
print(f'The sum is: {sum} ')
print(f'The average is: {sum/co')
    biggest_number = -1
    for new_number in number:
        if new_number > biggest_number:
            print('The largest number is: ')