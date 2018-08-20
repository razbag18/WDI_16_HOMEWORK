class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
    @house = @student.house
  end

  # def create
  #   @s
  # end

end
