class GameController < ApplicationController
  def try
# this creates a random number from 1 to 100
        r = Random.new
       @random_number = r.rand(1...100)
       cookies[:secret_num] = @random_number unless !cookies[:secret_num].nil?

       session[:counter] = session[:counter] + 1

       @counter = session[:counter]

# checks for win, if win, generates numba
    if params[:guess].to_i == cookies[:secret_num].to_i
      session[:counter] = 0
      r = Random.new
     @random_number = r.rand(1...100)
     cookies[:secret_num] = @random_number
     @result = "win"



   elsif params[:guess].to_i < cookies[:secret_num].to_i
      @result = "too low, try again"


    else params[:guess].to_i > cookies[:secret_num].to_i
      @result = "too high, try again"
    end

  end

end
