from models import Animal, Dog, Cat

a1 = Animal("Generic Animal", 5, "gray")
d1 = Dog("Buddy", 3, "brown", "Labrador")
c1 = Cat("Mimi", 2, "white", True)

animals = [a1, d1, c1]

for animal in animals:
    print(animal)
    print(animal.info())
    print(animal.speak())
    print()