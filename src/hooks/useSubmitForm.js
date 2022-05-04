import { useContext, useEffect } from "react";
import { CurrentObject } from "../context";

//Хук принимет (элемент, функция изменения элемента, Сервис класс, функция обратного вызова создания элемента)
//Возвращает функция отправки

export const useSubmitForm = (element, setElement, service, createElement) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    useEffect(() => {
        setElement(objectForm);
    }, [objectForm])

    const submitHandler = async (e) => {
        e.preventDefault();
        const newElement = { ...element }
        if (objectForm.id === undefined || objectForm.id !== element.id) {
            await service.create(newElement).then(response => {
                createElement(response.data);
            })
        } else {
            await service.updateById(element.id, newElement).then(response => {
                createElement(response.data);
            })
        }

        setElement({});
      }

      return submitHandler;
}