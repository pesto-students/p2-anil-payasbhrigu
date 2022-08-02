-- Find the item that has minimum weight.
SELECT * FROM ITEMS 
    WHERE WEIGHT = ( 
    SELECT MIN(WEIGHT) 
FROM ITEMS ); 

-- Find the different warehouses in “Pune”.
SELECT * FROM WAREHOUSES 
WHERE LOCATION_CITY='Pune';

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT DESCRIPTION FROM ITEMS 
WHERE ONO in (
    SELECT ONO FROM ORDER 
    WHERE CNO=(
        SELECT CNO FROM CUSTOMER 
        WHERE CNAME='PATIL'))

-- Find a Warehouse which has maximum stores.
SELECT * FROM WAREHOUSES 
WHERE WID = (
    SELECT WID FROM STORES 
    GROUP BY WID ORDER BY COUNT(SID) 
    DESC LIMIT 1); 

-- Find an item which is ordered for a minimum number of times.
SELECT * FROM ITEMS 
WHERE ITEMNO IN (
    SELECT ITEMNO FROM ORDERS 
    GROUP BY ITEMNO HAVING COUNT(ITEMNO) = (
        SELECT COUNT(ITEMNO) FROM ORDERS 
        GROUP BY ITEMNO 
        ORDER BY COUNT(ITEMNO) 
        ASC LIMIT 1));

-- Find the detailed orders given by each customer.
SELECT CNAME ,O.ONO,ODATE ,ITEMNO,DESCRIPTION FROM CUSTOMER C 
INNER JOIN ORDERS O ON C.CNO=O.CNO 
INNER JOIN ITEMS I ON O.ONO=I.ONO