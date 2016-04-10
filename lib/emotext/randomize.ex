defmodule Randomize do 
    def random(number) do 
      :rand.uniform(number) 
    end 
end 