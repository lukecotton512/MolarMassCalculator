-- Molar Mass Calculator Database Setup.
-- Luke Cotton

-- Create the table.
create table elements 
(
    id SERIAL,
    element_symbol CHAR(3) NOT NULL,
    element_name VARCHAR(255) NOT NULL,
    weight DECIMAL(11,3)
);

-- Insert the elements.
INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(1, 'H', 'Hydrogen', 1.008);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(2, 'He', 'Helium', 4.003);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(3, 'Li', 'Lithium', 6.94);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(4, 'Be', 'Beryllium', 9.012);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(5, 'B', 'Boron', 10.81);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(6, 'C', 'Carbon', 12.011);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(7, 'N', 'Nitrogen', 14.007);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(8, 'O', 'Oxygen', 15.999);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(9, 'F', 'Fluorine', 18.998);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(10, 'Ne', 'Neon', 20.180);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(11, 'Na', 'Sodium', 22.990);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(12, 'Mg', 'Magnesium', 24.305);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(13, 'Al', 'Aluminium', 26.982);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(14, 'Si', 'Silicon', 28.085);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(15, 'P', 'Phosphorus', 30.974);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(16, 'S', 'Sulfur', 32.06);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(17, 'Cl', 'Chlorine', 35.45);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(18, 'Ar', 'Argon', 39.948);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(19, 'K', 'Potassium', 39.098);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(20, 'Ca', 'Calcium', 40.078);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(21, 'Sc', 'Scandium', 44.956);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(22, 'Ti', 'Titanium', 47.867);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(23, 'Vi', 'Vanadium', 50.942);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(24, 'Cr', 'Chromium', 51.996);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(25, 'Mn', 'Manganese', 54.938);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(26, 'Fe', 'Iron', 55.845);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(27, 'Co', 'Cobalt', 58.933);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(28, 'Ni', 'Nickel', 58.693);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(29, 'Cu', 'Copper', 63.546);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(30, 'Zn', 'Zinc', 65.38);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(31, 'Ga', 'Gallium', 69.723);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(32, 'Ge', 'Germanium', 72.630);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(33, 'As', 'Arsenic', 74.922);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(34, 'Se', 'Selenium', 78.971);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(35, 'Br', 'Bromine', 79.904);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(36, 'Kr', 'Krypton', 85.798);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(37, 'Rb', 'Rubidium', 85.469);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(38, 'Sr', 'Strontium', 87.62);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(39, 'Y', 'Yttrium', 88.906);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(40, 'Zr', 'Zirconium', 91.224);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(41, 'Nb', 'Niobium', 92.906);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(42, 'Mo', 'Molybdenum', 95.95);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(43, 'Tc', 'Technetium', 98.0);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(44, 'Ru', 'Ruthenium', 101.07);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(45, 'Rh', 'Rhodium', 102.906);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(46, 'Pd', 'Palladium', 106.42);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(47, 'Ag', 'Silver', 107.868);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(48, 'Cd', 'Cadmium', 112.414);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(49, 'In', 'Indium', 114.818);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(50, 'Sn', 'Tin', 118.710);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(51, 'Sb', 'Antimony', 121.760);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(52, 'Te', 'Tellurium', 127.60);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(53, 'I', 'Iodine', 126.904);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(54, 'Xe', 'Xenon', 131.293);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(55, 'Cs', 'Caesium', 132.905);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(56, 'Ba', 'Barium', 137.327);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(57, 'La', 'Lanthanum', 138.905);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(58, 'Ce', 'Cerium', 140.116);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(59, 'Pr', 'Praseodymium', 140.908);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(60, 'Nd', 'Neodymium', 144.242);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(61, 'Pm', 'Promethium', 145);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(62, 'Sm', 'Samarium', 150.36);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(63, 'Eu', 'Europium', 151.964);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(64, 'Gd', 'Gadolinium', 157.25);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(65, 'Tb', 'Terbium', 158.925);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(66, 'Dy', 'Dysprosium', 162.500);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(67, 'Ho', 'Holmium', 164.930);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(68, 'Er', 'Erbium', 167.259);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(69, 'Tm', 'Thulium', 168.934);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(70, 'Yb', 'Ytterbium', 173.045);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(71, 'Lu', 'Lutetium', 174.967);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(72, 'Hf', 'Hafnium', 178.49);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(73, 'Ta', 'Tantalum', 180.948);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(74, 'W', 'Tungsten', 183.84);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(75, 'Re', 'Rhenium', 186.207);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(76, 'Os', 'Osmium', 190.23);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(77, 'Ir', 'Iridium', 192.217);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(78, 'Pt', 'Platinum', 195.084);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(79, 'Au', 'Gold', 196.967);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(80, 'Hg', 'Mercury', 200.592);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(81, 'Tl', 'Thallium', 204.38);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(82, 'Pb', 'Lead', 207.20);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(83, 'Bi', 'Bismuth', 208.980);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(84, 'Po', 'Polonium', 209.0);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(85, 'At', 'Astatine', 210.0);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(86, 'Rn', 'Radon', 222);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(87, 'Fr', 'Francium', 223);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(88, 'Ra', 'Radium', 226);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(89, 'Ac', 'Actinium', 227);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(90, 'Th', 'Thorium', 232.038);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(91, 'Pa', 'Protactinum', 231.036);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(92, 'U', 'Uranium', 238.029);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(93, 'Np', 'Neptunium', 237);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(94, 'Pu', 'Plutonium', 244);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(95, 'Am', 'Americium', 243);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(96, 'Cm', 'Curium', 247);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(97, 'Bk', 'Berkelium', 247);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(98, 'Cf', 'Californium', 251);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(99, 'Es', 'Einsteinium', 252);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(100, 'Fm', 'Fermium', 257);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(101, 'Md', 'Mendelevium', 258);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(102, 'No', 'Nobelium', 259);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(103, 'Lr', 'Lawrencium', 266);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(104, 'Rf', 'Rutherfordium', 267);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(105, 'Db', 'Dubnium', 268);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(106, 'Sg', 'Seaborgium', 269);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(107, 'Bh', 'Bohrium', 270);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(108, 'Hs', 'Hassium', 277);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(109, 'Mt', 'Meitnerium', 278);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(110, 'Ds', 'Darmstadtium', 281);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(111, 'Rg', 'Roentgenium', 282);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(112, 'Cn', 'Copernicium', 285);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(113, 'Nh', 'Nihonium', 286);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(114, 'Fl', 'Flerovium', 289);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(115, 'Mc', 'Moscovium', 290);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(116, 'Lv', 'Livermorium', 293);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(117, 'Ts', 'Tennessine', 294);

INSERT INTO elements
(id, element_symbol, element_name, weight)
VALUES
(118, 'Og', 'Oganesson', 294);