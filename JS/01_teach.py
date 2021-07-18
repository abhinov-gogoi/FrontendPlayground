given_string = "Hello World How Are You"

my_list = given_string.split(" ")
my_list.reverse()

list2 = []
new_String = ""

for word in my_list:
  newWord = ""
  for letter in word:
    if letter.isupper():
      changed_letter = letter.lower()
    else:
      changed_letter = letter.upper()
    newWord = newWord + changed_letter
  list2.append(newWord)
  new_String = new_String + newWord + " "

print(given_string)
print(new_String)






