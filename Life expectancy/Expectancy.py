highest_value = 5
lowest_value = 200
highest_value_2 = 5
lowest_value_2 = 200
count = 0
count_specific_year = 0
total_expectancy_for_year = 0
country = ''
country_highest_for_year = ''
country_lowest_for_year = ''
country_highest_for_year_2 = ''
country_lowest_for_year_2 = ''
highest_value_for_year = 5
lowest_value_for_year = 200

with open("life-expectancy.csv") as life_expectancy:
    year_of_interest = int(input("Enter the year of interest: "))
    for line in life_expectancy:
        count += 1
        life_expectancy = line.strip().split(',')
        if count != 1:
            years_lived = life_expectancy[3]
            country = life_expectancy[0]
            year = int(life_expectancy[2])
            years_lived = float(years_lived)
            if years_lived > highest_value:
                highest_value = years_lived
                country_highest = country
                year_with_highest = year
            if years_lived < lowest_value:
                lowest_value = years_lived
                country_lowest = country
                year_with_lowest = year
            if year == year_of_interest:
                count_specific_year += 1
                total_expectancy_for_year += years_lived
                if years_lived > highest_value_2:
                    highest_value_2 = years_lived
                    country_highest_for_year_2 = country
                if years_lived < lowest_value_2:
                    lowest_value_2 = years_lived
                    country_lowest_for_year_2 = country
    print(
        f"The overall max life expectancy is: {highest_value} from {country_highest} is {year_with_highest}")
    print()
    print(
        f"The overall min life expectancy is: {lowest_value} from {country_lowest} in {year_with_lowest}")
print()
print()
print(f"For the year {year_of_interest}:")
print(
    f"The average life expectancy across all countries was {total_expectancy_for_year/count_specific_year:.2f}")
print(
    f"The max life expectancy was in {country_highest_for_year_2} with {highest_value_2:.2f}")
print(
    f"The min life expectancy was in {country_lowest_for_year_2} with {lowest_value_2:.2f}")
