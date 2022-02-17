first_scenario = input(
    'You are waiting for a date in a restaurant and the waiter ask you if you would like to  GET a glass of water while you wait or NOT: ').lower()
if first_scenario == 'get':
    print('As the waiter walks towards you with the glass of water you, he trips and spills water on your shirt')
    second_scenario_1 = input(
        'would you like to YELL at him or NOT: ').lower()
    if second_scenario_1 == 'yell':
        print('you suddenly look around and see your pastor and his wife at the far end of the restaurant shaking their head in dissapointment as someone leaves their table')
        third_scenario_1a = input(
            'would you walk up to your pastor to EXPLAIN or CONTINUE waiting for your date or would you LEAVE: ').lower()
        if third_scenario_1a == 'explain':
            print('Your pastor tells you that you that you should have done better, and the person who just walked away was supposed offer you a job')
        elif third_scenario_1a == 'continue':
            print('You continue waiting for your date but she does not show up')
        elif third_scenario_1a == 'leave':
            print(
                "As you are heading out, you trip and spill some one's drink on them")
        else:
            print('wrong command!')
    elif second_scenario_1 == 'not':
        print('your date walks in and smiles at you')
        third_scenario_1b = input(
            'After the date would you leave just a TIP or hail the waiter to TELL him you understand what happened earlier was not his fault and still leave a tip or NOT: ').lower()
        if third_scenario_1b == 'tip':
            print(
                "your date would tell you that that's so kind of you, that she saw what happened and liked how you handled it")
        elif third_scenario_1b == 'tell':
            print('An old man will walk up to you and tell you that you are a good man and if you ever needed help you could call on him.')
        elif third_scenario_1b == 'not':
            print('you would look around to find a couple smiling at you')
        else:
            print('wrong command!')
    else:
        print('wrong command!')

elif first_scenario == "not":
    print('You smell food and your stomach begins to growl')
    second_scenario_a = input(
        'would you like to ORDER for food or NOT: ').lower()
    if second_scenario_a == 'not':
        print("while waiting for your date five men in masks storm the restaurant. They ask every body to lie down and they take everyones' phones. lucky for you, you had noticed them in time to hide your phone in your socks. You just noticed only one of them has a gun")
        third_scenario_a = input(
            "would you WRESTLE with the one that has a gun or CONTINUE lying down?: ").lower()
        if third_scenario_a == "wrestle":
            print('As you tackle the one with the gun you successfully bring him down, you look to your left to see the chef bringing down a chair on one of the thieves. The thieves are successfully overpowered')
        elif third_scenario_a == "continue":
            print('Your phone rings')
        else:
            print('wrong command!')

    elif second_scenario_a == 'order':
        print('Your meal arrives and you are tearing down your meal, You here noises. The fire alarm sounds. You run outside the restaurant alongside many others with a piece of chicken in hand')
        third_scenario_b = input(
            "there is a couple crying that their grand daughter is still in there, would you RUN in or CALL the 911: ").lower()
        if third_scenario_b == "run":
            print('As you are about to dash in, your date arrives, runs up to you, and asks you what is going on. you tell her, and she tells you she has been trained for it and would handle it')
        elif third_scenario_b == "call":
            print('You hear sirens in the distance and you look back at the building to see the chef walking out with the granddaughter safe in his arms')
        else:
            print('wrong command!')
