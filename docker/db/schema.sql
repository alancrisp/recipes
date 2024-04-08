CREATE TABLE recipe (
    recipeId int unsigned NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    PRIMARY KEY (recipeId)
);

CREATE TABLE unit (
    unitId int unsigned NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    abbrev varchar(100) NOT NULL,
    PRIMARY KEY (unitId)
);

CREATE TABLE ingredient (
    ingredientId int unsigned NOT NULL AUTO_INCREMENT,
    recipeId int unsigned NOT NULL,
    name varchar(100) NOT NULL,
    qty int unsigned NOT NULL,
    unitId int unsigned,
    PRIMARY KEY (ingredientId),
    FOREIGN KEY (recipeId) REFERENCES recipe (recipeId),
    FOREIGN KEY (unitId) REFERENCES unit (unitId)
);
