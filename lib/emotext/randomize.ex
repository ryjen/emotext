defmodule Randomize do 
    @on_load :reseed_generator 

    def reseed_generator do 
      :random.seed(:os.timestamp())
      :ok
    end 

    def random(number) do 
      :random.uniform(number) 
    end 
end 