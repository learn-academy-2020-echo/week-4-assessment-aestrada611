# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest. Use the test variables provided.

full_arr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
full_arr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]


# was trying to take this original piece of code and try to get it to select for odd values!! This one was difficult because i spent alot of time trying to find the method that would filter out only numbers

def is_odd array
  array.select.with_index do |value, index|
    index.odd?
  end
end



# def odds_only array
#
#    array.select(&:odd?)
#
# end
#
#
p is_odd full_arr1
p is_odd full_arr2




# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']


# There must be a method that will be able to use the includ method but extract the actual value that is being held in the array instead of just returning a boolean value.
# must determine how I will determine which letter is being called upon to see if the character is present in the element that is being inspected.





def letter_scanner_o array
  array.select {|item| item.include?('o')}
  # array.select {|item| item.include?('o') || item.include?('a')}
  # I was trying to create a method that would return two arrays each looking for a different letters
  # only solution that came to mind would be to do two seperate methods
end

p letter_scanner_o beverages_array

def letter_scanner_a array
  array.select {|item| item.include?('a')}
end

p letter_scanner_a beverages_array



# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'


# must look intp how to remove values from a string
def vowel_remover1 string
  string.downcase.delete 'aeiou'
end



def vowel_remover string
  string.delete 'aeiouAEIOU'
end

p vowel_remover1 album1
p vowel_remover1 album2
p vowel_remover1 album3



p vowel_remover album1
p vowel_remover album2
p vowel_remover album3



# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# There must be a method that will add the sum for me

def num_sum array
  array.inject(0, :+)
end

p num_sum nums_array1
p num_sum nums_array2



# ended up finding an easier one!!

def num_sum2 array
  array.sum
end

p num_sum2 nums_array1
p num_sum2 nums_array2


# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# must compare string forward and string backwords in order to see if they are the same.

def palindrom_checker string
  if string.downcase == string.downcase.reverse
    "#{string} is a palindrome"
  else
     "#{string} is not a palindrome"
  end
end
# why when putting puts in return for if or else it would cause the word nil to appear

p palindrom_checker is_palindrome1
p palindrom_checker is_palindrome2
p palindrom_checker is_palindrome3
# p palindrom_checker is_palindrome1

# must find out why I am getting a nil value after it saying if it is a string or not



# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'
