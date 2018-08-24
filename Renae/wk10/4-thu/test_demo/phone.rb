class Phone
  def initialize(number)
    @number = number
  end

  def international?
    @number[0] == '1'
  end

  def allDigits?
    !!/^[\d]+$/.match(@number)
  end

  def sixNums?
    @number.length == 10 && allDigits?
  end

end

# local_variable
# @instance_variable
# @@class_variable
# $global_variable
# CONSTANT

# JAVASCRIPT CODE:
# export default class TweetBox extends React.Component {
#   constructor(content) {
#     this.content = content
#   }
# }