_DOM V3:_


Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список із елементів:

<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

Якщо ж у масиві зустрічається масив (наприклад, [1,2, [1.1,1.2,1.3] ,3]) то робити вкладений список. Для перевірки масиву використовуйте Array.isArray().

<ul>
	<li>1</li>
	<li>2</li>
	<li>
		<ul>
			<li>1.1</li>
			<li>1.2</li>
			<li>1.3</li>
		</ul>
	</li>
	<li>3</li>
</ul>